import './Profile.css'
import logo from './logo.png'


interface LinkItemProps {
  url: string
  title: string
}

function LinkItem(props: LinkItemProps) {
  return (
    <a className="linkItem" href={props.url} target="_blank">{props.title}</a>
  )
}

function Profile() {
  return (
    <div className="Profile">
      <h1>aoirint</h1>
      <img src={logo} className="logo" alt="logo" width="128" />

      <div className="links">
        <LinkItem url="https://twitter.com/aoirint" title="Twitter" />
        <LinkItem url="https://github.com/aoirint" title="GitHub" />
      </div>

    </div>
  )
}

export default Profile
