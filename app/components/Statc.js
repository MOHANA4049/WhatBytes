import 'C:/Users/mohan/Downloads/tasks/app/components/stat.css'
function Statc({ rank, questionsAnswered, percentile }) {
    return (
      <div className="quick-statistics">
        <p>Your Rank:{rank}</p>
        <p>Correct Answers:{questionsAnswered}/20</p>
        <p>Percentile:{percentile}%</p>
      </div>
    );
  }
  export default Statc;