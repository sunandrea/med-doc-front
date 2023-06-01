import style from './GridLayout.module.css';

export const GridLayout = ({ children }) => {
    return (
        <section className="section">
            <div className={style.gridTemplate}>{children}</div>
        </section>
    );
};
