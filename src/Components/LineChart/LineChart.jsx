import { LineChart as LChart, Line,XAxis,YAxis } from 'recharts';
import PropTypes from 'prop-types';
const LineChart = () => {
    
    const subjectMarksData = [
        {
          id: 1,
          name: "Student 1",
          math: 85,
          physics: 78,
          chemistry: 90,
          biology: 70
        },
        {
          id: 2,
          name: "Student 2",
          math: 92,
          physics: 88,
          chemistry: 85,
          biology: 75
        },
        {
          id: 3,
          name: "Student 3",
          math: 78,
          physics: 82,
          chemistry: 88,
          biology: 68
        },
        {
          id: 4,
          name: "Student 4",
          math: 88,
          physics: 90,
          chemistry: 92,
          biology: 85
        },
        {
          id: 5,
          name: "Student 5",
          math: 76,
          physics: 72,
          chemistry: 80,
          biology: 65
        },
        {
          id: 6,
          name: "Student 6",
          math: 95,
          physics: 88,
          chemistry: 91,
          biology: 89
        },
        {
          id: 7,
          name: "Student 7",
          math: 89,
          physics: 84,
          chemistry: 87,
          biology: 78
        },
        {
          id: 8,
          name: "Student 8",
          math: 93,
          physics: 91,
          chemistry: 94,
          biology: 90
        },
        {
          id: 9,
          name: "Student 9",
          math: 81,
          physics: 76,
          chemistry: 80,
          biology: 72
        },
        {
          id: 10,
          name: "Student 10",
          math: 87,
          physics: 82,
          chemistry: 85,
          biology: 79
        }
      ];
      
      
      
    return (
        <div className='text-white bg-black'>
            <LChart width={800} height={400} 
            data={subjectMarksData}>
            <XAxis dataKey='name'></XAxis>
            <YAxis></YAxis>   
            <Line dataKey="math" stroke='red' >
            </Line>
            <Line dataKey={'physics'} stroke='yellow'>
            </Line>
            </LChart>
            
        </div>
    );
};
LineChart.propTypes = {
mathMarksData: PropTypes.array


}

export default LineChart;