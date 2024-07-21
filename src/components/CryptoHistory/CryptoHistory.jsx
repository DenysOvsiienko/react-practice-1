import style from './CryptoHistory.module.css';
import { formatDistanceToNow } from 'date-fns';

export const CryptoHistory = ({ items }) => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          <th className={style.th}>№</th>
          <th className={style.th}>PRICE</th>
          <th className={style.th}>AMOUNT</th>
          <th className={style.th}>DATE</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          const result = formatDistanceToNow(new Date(item.date));
          return (
            <tr key={item.id} className={style.tr}>
              <td className={style.td}>{items.indexOf(item) + 1}</td>
              <td className={style.td}>{item.price}</td>
              <td className={style.td}>{item.amount}</td>
              <td className={style.td}>{result} ago</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
