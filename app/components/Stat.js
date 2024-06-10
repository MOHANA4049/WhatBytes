import Statc from 'C:/Users/mohan/Downloads/tasks/app/components/Statc.js';

function Stat() {
  const rank = 10;
  const questionsAnswered = 20;
  const percentile = 85;

  return (
    <div>
      <Statc rank={rank} questionsAnswered={questionsAnswered} percentile={percentile} />
    </div>
  );
}
export default Stat;