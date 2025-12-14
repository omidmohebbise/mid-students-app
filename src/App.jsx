import { useState } from 'react'
import './App.css'

const categoriesData = {
  Math: {
    title: 'Mathematics',
    description: 'Explore mathematical concepts and theories',
    topics: [
      'Algebra - Equations and expressions',
      'Geometry - Shapes and spatial reasoning',
      'Calculus - Derivatives and integrals',
      'Statistics - Data analysis and probability',
      'Trigonometry - Angles and triangles'
    ]
  },
  Chemical: {
    title: 'Chemistry',
    description: 'Discover the world of chemical reactions and elements',
    topics: [
      'Periodic Table - Elements and their properties',
      'Chemical Reactions - Balancing equations',
      'Organic Chemistry - Carbon compounds',
      'Acids and Bases - pH and neutralization',
      'Molecular Structure - Bonds and molecules'
    ]
  },
  Science: {
    title: 'General Science',
    description: 'Learn about the natural world and scientific methods',
    topics: [
      'Scientific Method - Hypothesis and experimentation',
      'Biology - Life and living organisms',
      'Physics - Motion, energy, and forces',
      'Earth Science - Geology and meteorology',
      'Astronomy - Stars, planets, and space'
    ]
  },
  Physics: {
    title: 'Physics',
    description: 'Understanding the fundamental laws of nature',
    topics: [
      'Mechanics - Motion and forces',
      'Thermodynamics - Heat and energy',
      'Electromagnetism - Electricity and magnetism',
      'Optics - Light and vision',
      'Quantum Physics - Atomic and subatomic particles'
    ]
  },
  Biology: {
    title: 'Biology',
    description: 'Study of life and living organisms',
    topics: [
      'Cell Biology - Structure and function of cells',
      'Genetics - DNA and heredity',
      'Evolution - Natural selection and adaptation',
      'Ecology - Ecosystems and environments',
      'Human Anatomy - Body systems and organs'
    ]
  }
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>📚 Student Learning Portal</h1>
        <p>Select a category to explore content</p>
      </header>

      <div className="content-wrapper">
        <aside className="categories-sidebar">
          <h2>Categories</h2>
          <ul className="categories-list">
            {Object.keys(categoriesData).map((category) => (
              <li key={category}>
                <button
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {categoriesData[category].title}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <main className="content-area">
          {selectedCategory ? (
            <div className="category-content">
              <h2>{categoriesData[selectedCategory].title}</h2>
              <p className="category-description">
                {categoriesData[selectedCategory].description}
              </p>
              <h3>Topics Covered:</h3>
              <ul className="topics-list">
                {categoriesData[selectedCategory].topics.map((topic, index) => (
                  <li key={index}>{topic}</li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="welcome-message">
              <h2>Welcome! 👋</h2>
              <p>Please select a category from the sidebar to view related content.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default App
