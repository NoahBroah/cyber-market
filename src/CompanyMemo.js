import React from 'react'

function CompanyMemo({ company, authors, updatedDate, categories }) {
    const text = "Hey check out this company"
    return (
        <div className="company-memo">
            <img src={`/company-logos/${company}.png`} alt={company} />
            <div className="company-memo-content">
                <h4>{company}</h4>
                </div>
                <div className='company-memo-text'>
                    {text}
                </div>
                <div className='company-memo-footer'>
                    <span className='company-memo-author'>
                        By {authors.join(', ')}
                    </span>
                    <span className='company-memo-date'>
                        - Updated {updatedDate}
                    </span>
                </div>
                 
                {categories.map(cat => (
                    <span key={cat}>{cat}</span>
                ))}
            </div>
      
        
  )
}

export default CompanyMemo