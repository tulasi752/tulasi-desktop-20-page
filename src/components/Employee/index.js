import './index.css'

const Employee = props => {
  const {data} = props
  const {image, name, role, contact, gmail} = data

  return (
    <div className="employee-details-container">
      <img className="image" src={image} alt="employee-img" />
      <p className="name">{name}</p>
      <p className="gmail">{gmail}</p>
      <p className="role">{role}</p>
      <p className="contact">{contact}</p>
      <button className="button" type="button">
        View
      </button>
    </div>
  )
}
export default Employee
