import ScrollForMore from '../../../commonFunctionalities/ScrollForMore.jsx'


export default function HealthCoach() {
  return (
    <>
      <h2 className="mb-10">My Health Coach</h2>
      <div className="relative w-full flex flex-col items-center justify-center overflow-hidden h-full">
        <div className="container">
          <iframe className="responsive-iframe" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
        </div>
        <div className="absolute bottom-20">
          <ScrollForMore />
        </div>
      </div>
    </>
  )
};