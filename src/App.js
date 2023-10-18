import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import HeaderSection from './HeaderSection';
import CompanyMemo from './CompanyMemo';
import LoadMoreButton from './LoadMoreButton';
import NewsletterSection from './NewsletterSection';
import TrendingCompanies from './TrendingCompanies';
import Footer from './Footer';
import './App.css';

// Import your components here
// import Reports from './Reports';
// import DeepDives from './DeepDives';
import Companies from './Companies';
// import Conversations from './Conversations';
// import About from './About';

function App() {
  // Sample data for the memos
  const memos = [
    {
      company: "BedRock Systems",
      authors: ["Noah King"],
      updatedDate: "Oct 11 2023",
      categories: ["Cybersecurity"]
    },
    // ... add other memos similarly
  ];

  const trendingCompanies = ["01Ramp", "02Vanvevar Labs", "03BeReal", "04Hugging Face", "05Stripe"];

  return (
    <Router>
      <div className="App">
        <NavBar />
        <HeaderSection />
        <Routes>
          {/* <Route path="/reports" element={<Reports />} />
          <Route path="/deep-dives" element={<DeepDives />} /> */}
          <Route path="/companies" element={<Companies />} />
          {/* <Route path="/conversations" element={<Conversations />} />
          <Route path="/about" element={<About />} /> */}
        </Routes>
        <div className="memos-section">
          {memos.map((memo, index) => (
            <CompanyMemo 
              key={index}
              company={memo.company}
              authors={memo.authors}
              updatedDate={memo.updatedDate}
              categories={memo.categories}
            />
          ))}
        </div>
        <LoadMoreButton />
        <NewsletterSection />
        <TrendingCompanies companies={trendingCompanies} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

