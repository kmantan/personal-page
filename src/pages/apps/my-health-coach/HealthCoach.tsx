import ScrollForMore from '../../../commonFunctionalities/ScrollForMore.jsx'


export default function HealthCoach() {
  return (
    <div className="relative h-full flex flex-col items-center">
      <h2>My Health Coach</h2>
      <div className="absolute bottom-20">
      <ScrollForMore />
      </div>
    </div>
  )
};