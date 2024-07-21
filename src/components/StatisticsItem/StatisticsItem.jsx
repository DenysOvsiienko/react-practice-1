import style from './Statistics.module.css';

export const StatisticsItem = ({ stat, Icon }) => {
  return (
    <>
      <Icon size={30} />
      <span className={style.counter}>{stat.total}</span>
      <p className={style.text}>{stat.title}</p>
    </>
  );
};
