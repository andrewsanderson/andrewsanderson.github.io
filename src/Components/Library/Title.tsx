import styles from "./Title.module.css";

const Title = ({
  title,
  subtitle,
  side = "left",
}: {
  title: string;
  subtitle: string;
  side?: "right" | "left";
}) => {
  return (
    <div
      className="pt-36 pb-8 relative w-full flex"
      style={{ flexDirection: side === "left" ? "row" : "row-reverse" }}
    >
      <div
        className={side === "left" ? styles.pointerL : styles.pointerR}
        style={{ width: "25%" }}
      >
        <div className="h-1/4 border-b border-dashed border-slate-800"></div>
        <div className="h-1/4"></div>
        <div className="h-1/4"></div>
        <div className="h-1/4"></div>
      </div>
      <div className={`${styles.accent} bg-slate-600 w-2 `}></div>
      <div style={{ overflow: "hidden" }}>
        <div
          className={side === "left" ? styles.titleL : styles.titleR}
          style={{ padding: side === "right" ? "0 1rem 0 0" : " 0 0 0 1rem" }}
        >
          <div
            className="uppercase font-bold text-3xl"
            style={{ textAlign: side }}
          >
            {title}
          </div>
          <div className="lowercase inline font-thin text-2xl">{subtitle}</div>
        </div>
      </div>
    </div>
  );
};

export default Title;
