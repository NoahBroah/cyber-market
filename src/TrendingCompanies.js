import React from 'react';

function TrendingCompanies({ companies }) {
    return (
        <section className="trending-companies">
            <h3>Trending Companies</h3>
            <ul>
                {companies.map((company, index) => (
                    <li key={index}>{company}</li>
                ))}
            </ul>
        </section>
    );
}

export default TrendingCompanies;