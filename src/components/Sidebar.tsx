interface SidebarIconProps {
  icon: string;
  text?: string;
}

const SidebarIcon = ({ icon, text = "Tushan is noob" }: SidebarIconProps): JSX.Element => {
  return (
    <div className="">
      <span className="material-symbols-outlined sidebar s-icon">
        {icon}
      </span>
      <span className="sidebar-tooltip">
        {text}
      </span>
    </div>
  )

}

const Sidebar = (): JSX.Element => {
  return (
    <div className="fixed left-0 top-0 h-screen w-20 m-0 flex flex-col bg-gray-900 text-white shadow">
      <span className="material-symbols-outlined sidebar s-home">
        group
      </span>
      <SidebarIcon icon="home" />
      <SidebarIcon icon="groups" />
      <hr className="bg-gray-200 border border-gray-200 rounded-full mx-4 mb-3" />
      <img src="https://lh3.googleusercontent.com/a-/AD_cMMQC0iydupDD4PlTRB7Iowx2gkiBkXD6-Ndd04iOzsfIUw=s240-p-k-rw-no" className="contact"></img>
      <img src="https://lh3.googleusercontent.com/a-/AD_cMMRfecw9rR1bUWWNki0QSVHGT2ipC-oOx-qZr77c1G1fS14=s240-p-k-rw-no" className="contact"></img>
      <a className="settings-down" href="https://google.com">
        <hr className="bg-gray-200 border border-gray-200 rounded-full mx-4" />
        <img src="https://lh3.googleusercontent.com/ogw/AGvuzYYndjzvnqcnojHTE1WBhsy9TaZbuMxZR9hpRv5ZZQ=s320-c-mo" className="contact mt-3 mb-3"></img>
      </a>
    </div>
  )
}

export default Sidebar
