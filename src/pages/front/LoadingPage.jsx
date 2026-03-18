import { useEffect, useRef, useState } from 'react';
import CornCartSvg from '../../components/CornCartSvg';

const DURATION = 3200; // 入場動畫時長 (ms)
const WHEEL_STEP = 2; // 每幀轉動角度

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

// enableWheelRotation: true = 輪胎會轉動, false = 輪胎不轉動
const LoadingPage = ({ onComplete, enableWheelRotation = true }) => {
  const [phase, setPhase] = useState('idle'); // idle → riding → settling → done
  const [cartLeft, setCartLeft] = useState(null);
  const [cartBounce, setCartBounce] = useState(0);
  const [wheelRot, setWheelRot] = useState(0);
  const [titleShow, setTitleShow] = useState(false);
  const [subShow, setSubShow] = useState(false);

  const rafRef = useRef(null);
  const t0Ref = useRef(null);
  const wheelRef = useRef(0);

  // 取得寬度後設起始位置，延遲開始
  useEffect(() => {
    const timer = setTimeout(() => setPhase('riding'), 350);
    return () => clearTimeout(timer);
  }, []);

  // 入場動畫
  useEffect(() => {
    if (phase !== 'riding') return;

    const W = window.innerWidth;
    const cartW = window.innerWidth * 0.45 > 405 ? 405 : window.innerWidth * 0.45;
    const startL = W + 50;
    const endL = (W - cartW) / 2;

    setCartLeft(startL);
    t0Ref.current = null;

    const ride = ts => {
      if (!t0Ref.current) t0Ref.current = ts;
      const elapsed = ts - t0Ref.current;
      const p = Math.min(elapsed / DURATION, 1);
      const ep = easeOutCubic(p);

      setCartLeft(startL - (startL - endL) * ep);
      setCartBounce(Math.sin(elapsed / 72) * 5 * (1 - p));

      // 輪胎轉動邏輯（可通過 enableWheelRotation 控制）
      if (enableWheelRotation) {
        wheelRef.current = (wheelRef.current - WHEEL_STEP + 360) % 360;
        setWheelRot(wheelRef.current);
      }

      if (p < 1) {
        rafRef.current = requestAnimationFrame(ride);
      } else {
        setPhase('settling');
      }
    };

    rafRef.current = requestAnimationFrame(ride);
    return () => cancelAnimationFrame(rafRef.current);
  }, [phase, enableWheelRotation]);

  // 定點彈跳
  useEffect(() => {
    if (phase !== 'settling') return;

    const pops = [10, -6, 3, -1.5, 0.5, 0];
    let i = 0;

    const iv = setInterval(() => {
      setCartBounce(pops[i] ?? 0);
      i++;
      if (i >= pops.length) {
        clearInterval(iv);
        // 輪胎轉動時才需要重置到原始位置
        if (enableWheelRotation) {
          setWheelRot(0);
        }
        setTimeout(() => setTitleShow(true), 100);
        setTimeout(() => setSubShow(true), 560);
        setTimeout(() => {
          setPhase('done');
        }, 3000);
      }
    }, 72);

    return () => clearInterval(iv);
  }, [phase, enableWheelRotation]);

  // 動畫結束 → 跳轉
  useEffect(() => {
    if (phase === 'done' && onComplete) {
      onComplete();
    }
  }, [phase, onComplete]);

  return (
    <div className={`zj-stage${phase === 'done' ? ' zj-stage--done' : ''}`}>
      <div className="zj-ground" />

      <div className="zj-titles">
        <div className={`zj-title-main${titleShow ? ' zj-title-main--show' : ''}`}>
          <span className="zj-word--zhuangji">莊記</span>
          <span className="zj-word--kao">烤</span>
          <span className="zj-word--yumi">玉米</span>
        </div>
        <div className={`zj-title-sub${subShow ? ' zj-title-sub--show' : ''}`}>
          <span className="zj-word--zhuangji-en">Zhuang Ji </span>
          <span className="zj-word--roasted">Roasted Corn</span>
        </div>
      </div>

      {cartLeft !== null && (
        <div
          className="zj-cart-wrap"
          style={{
            left: `${cartLeft}px`,
            transform: `translateY(${cartBounce}px)`,
          }}
        >
          <CornCartSvg wheelRot={wheelRot} />
        </div>
      )}
    </div>
  );
};

export default LoadingPage;
