import { useState,useEffect } from "react";


const Company = () => {
    const [companies, setCompanies] = useState([]);
    const [category, setCategory] = useState('All');
  
    // useEffect(() => {
    //   // Fetch companies here (using sample data for demonstration)
    //   setCompanies(sampleCompanies);
    // }, []);
  
    // Filter and sort companies based on category and relevance
    const filteredCompanies = companies
      .filter(company => category === 'All' || company.category === category)
      .sort((a, b) => b.relevance - a.relevance);
  
    return (
      <div className='CompanyPage'>
        <h1>Companies</h1>
        <select onChange={e => setCategory(e.target.value)}>
          <option value='All'>All</option>
          <option value='Application'>Application Security</option>
          <option value='Container'>Container Security</option>
          <option value='EDR'>EDR</option>
          <option value='VulnerabilityMangement'>Vulnerability Mangement</option>
          <option value='EmailSecurity'>Email Security</option>
        </select>
        <ul>
          {filteredCompanies.map(company => (
            <li key={company.id}>{company.name} ({company.category})</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Company;