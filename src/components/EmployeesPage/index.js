import {Component} from 'react'

import {BsFillBellFill, BsFillChatDotsFill, BsColumnsGap} from 'react-icons/bs'
import {GiCalendar} from 'react-icons/gi'
import {FiUsers} from 'react-icons/fi'
import {ImMan, ImFileText2} from 'react-icons/im'
import {IoBusinessOutline} from 'react-icons/io5'
import {AiOutlineSetting, AiOutlineBulb} from 'react-icons/ai'
import {BiSliderAlt, BiDoorOpen, BiNews} from 'react-icons/bi'
import Employee from '../Employee'
import './index.css'

const data = [
  {
    image: 'https://i.ibb.co/qs9kMqZ/Ellipse-29-2x.png',
    name: 'Applicant 2',
    gmail: 'Applicant1@gmail.com',
    role: 'UX/UI Designer',
    contact: '9959149451',
  },
  {
    image: 'https://i.ibb.co/qs9kMqZ/Ellipse-29-2x.png',
    name: 'Applicant 2',
    gmail: 'Applicant1@gmail.com',
    role: 'UX/UI Designer',
    contact: '9959149451',
  },
  {
    image: 'https://i.ibb.co/qs9kMqZ/Ellipse-29-2x.png',
    name: 'Applicant 2',
    gmail: 'Applicant1@gmail.com',
    role: 'UX/UI Designer',
    contact: '9959149451',
  },
  {
    image: 'https://i.ibb.co/qs9kMqZ/Ellipse-29-2x.png',
    name: 'Applicant 2',
    gmail: 'Applicant1@gmail.com',
    role: 'UX/UI Designer',
    contact: '9959149451',
  },
  {
    image: 'https://i.ibb.co/qs9kMqZ/Ellipse-29-2x.png',
    name: 'Applicant 2',
    gmail: 'Applicant1@gmail.com',
    role: 'UX/UI Designer',
    contact: '9959149451',
  },
  {
    image: 'https://i.ibb.co/qs9kMqZ/Ellipse-29-2x.png',
    name: 'Applicant 2',
    gmail: 'Applicant1@gmail.com',
    role: 'UX/UI Designer',
    contact: '9959149451',
  },
  {
    image: 'https://i.ibb.co/qs9kMqZ/Ellipse-29-2x.png',
    name: 'Applicant 2',
    gmail: 'Applicant1@gmail.com',
    role: 'UX/UI Designer',
    contact: '9959149451',
  },
  {
    image: 'https://i.ibb.co/qs9kMqZ/Ellipse-29-2x.png',
    name: 'Applicant 2',
    gmail: 'Applicant1@gmail.com',
    role: 'UX/UI Designer',
    contact: '9959149451',
  },
  {
    image: 'https://i.ibb.co/qs9kMqZ/Ellipse-29-2x.png',
    name: 'Applicant 2',
    gmail: 'Applicant1@gmail.com',
    role: 'UX/UI Designer',
    contact: '9959149451',
  },
  {
    image: 'https://i.ibb.co/qs9kMqZ/Ellipse-29-2x.png',
    name: 'Applicant 2',
    gmail: 'Applicant1@gmail.com',
    role: 'UX/UI Designer',
    contact: '9959149451',
  },
  {
    image: 'https://i.ibb.co/qs9kMqZ/Ellipse-29-2x.png',
    name: 'Applicant 2',
    gmail: 'Applicant1@gmail.com',
    role: 'UX/UI Designer',
    contact: '9959149451',
  },
  {
    image: 'https://i.ibb.co/qs9kMqZ/Ellipse-29-2x.png',
    name: 'Applicant 2',
    gmail: 'Applicant1@gmail.com',
    role: 'UX/UI Designer',
    contact: '9959149451',
  },
]

class Employees extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="sidebar">
          <h1 className="EOF">EOF</h1>
          <div className="container-flex">
            <BsColumnsGap className="dashboard-icon" fill="white" size="23" />
            <span className="dashboard">Dashboard</span>
          </div>
          <div className="container-flex">
            <FiUsers className="employee-icon" color="black" size="20" />
            <span className="employees">Employees</span>
          </div>
          <div className="container-flex">
            <BiDoorOpen className="stages-icon" size="23" color="white" />
            <span className="stages">Stages</span>
          </div>
          <svg
            width="16"
            height="10"
            viewBox="0 0 16 10"
            fill="white"
            size="25"
            xmlns="http://www.w3.org/2000/svg"
            className="slide-arrow"
          >
            <path
              d="M1.77295 1.72192L8.36036 8.30933L14.9478 1.72192"
              stroke="white"
            />
          </svg>

          <div className="container-flex">
            <ImMan className="welcome-stages-icon" color="white" size="23" />
            <span className="welcome-stages">Welcome Stages</span>
          </div>
          <div className="container-flex">
            <BiNews className="offer-letter-icon" size="23" color="white" />
            <span className="offer-letter">Offer Letter</span>
          </div>
          <div className="container-flex">
            <AiOutlineBulb
              className="skill-matrix-icon"
              color="white"
              size="23"
            />
            <span className="skill-matrix">Skill-matrix</span>
          </div>
          <div className="container-flex">
            <IoBusinessOutline
              size="23"
              className="know-your-company-icon"
              color="white"
            />
            <span className="know-your-company">Know Your Company</span>
          </div>
          <div className="container-flex">
            <BiNews
              className="joining-day-information-icon"
              color="white"
              size="20"
            />
            <span className="joining-day-information">
              Joining Day Information
            </span>
          </div>
          <div className="container-flex">
            <ImFileText2 className="feedback-icon" color="white" size="22" />
            <span className="feedback">Feedback</span>
          </div>
          <div className="container-flex">
            <ImFileText2 className="background-icon" color="white" size="22" />
            <span className="background">Background Check</span>
          </div>
          <div className="container-flex">
            <AiOutlineSetting
              className="settings-icon"
              color="white"
              size="24"
            />
            <span className="settings">Settings</span>
          </div>
        </div>
        <div className="employees-container">
          <nav className="navbar-container">
            <h1 className="employees-heading">Employees</h1>
            <div className="nav-items">
              <input type="search" className="searchBar" placeholder="Search" />
              <BsFillBellFill className="bell-icon" size="28" />
              <BsFillChatDotsFill className="chat-icon" size="28" />
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="search-icon"
              >
                <path
                  d="M9.78468 1.70806C5.3765 1.70806 1.80296 5.28159 1.80296 9.68977C1.80296 14.098 5.3765 17.6715 9.78468 17.6715C14.1929 17.6715 17.7664 14.098 17.7664 9.68977C17.7664 5.28159 14.1929 1.70806 9.78468 1.70806ZM0.66272 9.68977C0.66272 4.65185 4.74676 0.56781 9.78468 0.56781C14.8226 0.56781 18.9066 4.65185 18.9066 9.68977C18.9066 14.7277 14.8226 18.8117 9.78468 18.8117C4.74676 18.8117 0.66272 14.7277 0.66272 9.68977Z"
                  fill="#FFDB58"
                  stroke="#FFDB58"
                />
              </svg>
              <svg
                width="7"
                height="7"
                viewBox="0 0 7 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
              >
                <path
                  d="M0.793084 0.69732C1.01573 0.474673 1.37671 0.474673 1.59936 0.69732L6.16034 5.2583C6.38299 5.48095 6.38299 5.84193 6.16034 6.06458C5.93769 6.28722 5.57671 6.28722 5.35406 6.06458L0.793084 1.50359C0.570437 1.28095 0.570437 0.919966 0.793084 0.69732Z"
                  fill="#FFDB58"
                  stroke="#FFDB58"
                />
              </svg>
              <img
                src="https://i.ibb.co/1RYHf2B/Avatar.png"
                alt="Avatar"
                border="0"
                className="avatar"
              />
              <svg
                width="20"
                height="19"
                viewBox="0 0 16 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="down-arrow"
              >
                <path
                  d="M1.7876 1.17554L8.23589 7.62383L14.6842 1.17554"
                  stroke="black"
                />
              </svg>
            </div>
          </nav>
          <div className="container-employee-details">
            <span className="new-hire-container">New Hire</span>
            <span className="onboarding-in-progress">
              Onboarding In-Progress
            </span>
            <span className="onboarding-completed">Onboarding Completed</span>
            <span className="background-check">Background Check</span>
          </div>
          <div className="flex-container">
            <div>
              {' '}
              <p className="no-of-candidates">
                No of Candidates: <span className="number">25</span>
              </p>
            </div>
            <div className="calender-icon-container">
              <BiSliderAlt className="slider-icon" size="28" />
              <GiCalendar className="calender-icon" size="33" />
            </div>
            <svg
              width="2"
              height="35"
              viewBox="0 0 2 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="separator"
            >
              <path d="M1 1L1 34" stroke="#2A2515" />
            </svg>
          </div>
          <div className="employees-wrap-container">
            {data.map(eachEmployee => (
              <Employee data={eachEmployee} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}
export default Employees
