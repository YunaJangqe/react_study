import Header from '../components/Header';
import Button from '../components/Button';
import DiaryList from '../components/DiaryList';
import { useState, useContext } from 'react';
import { DiaryStateContext } from '../App';

const getMonthlyDate = (pivotDate, data) => {
       const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0, 0, 0).getTime();
       const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1, 0, 23, 59, 59).getTime();

       return data.filter((item) => beginTime <= item.createdDate && item.createdDate <= endTime);
};

const Home = () => {
       const data = useContext(DiaryStateContext);
       const [pivotDate, setPivotDate] = useState(new Date());
       const monthlyDate = getMonthlyDate(pivotDate, data);

       const onIncreaseMonth = () => {
              setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1))
       };
       const onDecreaseMonth = () => {
              setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1))
       };

       return (<>
              <Header 
                     title={`${pivotDate.getFullYear()}월 ${pivotDate.getMonth() + 1}월`} 
                     leftChild={<Button onClick={onDecreaseMonth} text={"<"} />}
                     rightChild={<Button onClick={onIncreaseMonth} text={">"} />}
              />
              <DiaryList data={monthlyDate}/>
              </>
       );
}

export default Home;