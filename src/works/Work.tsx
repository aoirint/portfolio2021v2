
export interface WorkProps {
  title: string
  image: string
  children?: React.ReactNode
}

function Work(props: WorkProps) {
  return (
    <div className="work">
      <h3 className="workTitle">{props.title}</h3>
      <img className="workImage" src={props.image} />

      <div className="workDescription">
        {props.children}
      </div>
    </div>
  )
}

export default Work
