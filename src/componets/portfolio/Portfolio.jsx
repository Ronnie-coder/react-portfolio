import React, { useEffect } from 'react';
import './portfolio.scss';

function Portfolio() {
  useEffect(() => {
    const items = document.querySelectorAll('.item');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const closeBtn = document.querySelector('.close');
    const projectTypes = document.querySelectorAll('.portfolio ul li');

    const handleItemClick = (event) => {
      const item = event.currentTarget;
      const img = item.querySelector('img');
      const title = item.querySelector('h3').textContent;

      modalImg.src = img.src;
      modalImg.alt = img.alt;
      modalTitle.textContent = title;

      modal.style.display = 'block';
      // Remove active class from all items and project types
      items.forEach(i => i.classList.remove('active'));
      projectTypes.forEach(pt => pt.classList.remove('active'));
      // Add active class to the clicked item and corresponding project type
      item.classList.add('active');
      const activeProjectType = Array.from(projectTypes).find(pt => pt.textContent.trim() === title);
      if (activeProjectType) {
        activeProjectType.classList.add('active');
      }
    };

    const handleCloseClick = () => {
      modal.style.display = 'none';
      // Remove active class from the item and project type when closing the modal
      const activeItem = document.querySelector('.item.active');
      if (activeItem) {
        activeItem.classList.remove('active');
      }
      const activeProjectType = document.querySelector('.portfolio ul li.active');
      if (activeProjectType) {
        activeProjectType.classList.remove('active');
      }
    };

    const handleWindowClick = (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
        // Remove active class from the item and project type when clicking outside the modal
        const activeItem = document.querySelector('.item.active');
        if (activeItem) {
          activeItem.classList.remove('active');
        }
        const activeProjectType = document.querySelector('.portfolio ul li.active');
        if (activeProjectType) {
          activeProjectType.classList.remove('active');
        }
      }
    };

    items.forEach(item => {
      item.addEventListener('click', handleItemClick);
    });

    closeBtn.addEventListener('click', handleCloseClick);

    window.addEventListener('click', handleWindowClick);

    return () => {
      items.forEach(item => {
        item.removeEventListener('click', handleItemClick);
      });
      closeBtn.removeEventListener('click', handleCloseClick);
      window.removeEventListener('click', handleWindowClick);
    };
  }, []);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li>E-commerce Platform</li>
        <li>Corporate Website</li>
        <li>Blog & CMS</li>
        <li>Landing Page</li>
        <li>Portfolio Site</li>
      </ul>
      <div className="container">
        <div className="item">
          <img src="assets/e-commerce.png" alt="E-commerce Platform" />
          <h3>E-commerce Platform</h3>
        </div>
        <div className="item">
          <img src="assets/coperate website.jpg" alt="Corporate Website" />
          <h3>Corporate Website</h3>
        </div>
        <div className="item">
          <img src="assets/blogs.jpg" alt="Blog & CMS" />
          <h3>Blog & CMS</h3>
        </div>
        <div className="item">
          <img src="assets/landing page.jpg" alt="Landing Page" />
          <h3>Landing Page</h3>
        </div>
        <div className="item">
          <img src="assets/portfolio website.png" alt="Portfolio Site" />
          <h3>Portfolio Site</h3>
        </div>
      </div>
      <div className="modal" id="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <img className="modal-img" id="modal-img" src="" alt="" />
          <h3 className="modal-title" id="modal-title">Project Title</h3>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;