/* eslint-disable no-unused-vars */
// import DataSource from '../data/data-source.js';
// eslint-disable-next-line no-unused-vars
import * as $ from 'jquery';

const showFormattedDate = (date) => {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    return new Date(date).toLocaleDateString('en-EN', options);
};

$.ajax({
    url: 'https://gnews.io/api/v4/top-headlines?token=3903bc87d19e6d6e5b9fb01cca4c5c47&topic=health&lang=en',
    success: (results) => {
        const news = results.articles;
        let cards = '';
        news.forEach((m) => {
            cards += `
            <div  id="newss" class="card mb-3 ms-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${m.image}" class="img-fluid rounded-start mt-4" alt="..."width="100%">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <a class="card-title" href="${m.url}" target="_blank">${m.title}</a>
                            <p class="card-text">${m.description}</p>
                            <p class="card-text"><small class="text-muted">${showFormattedDate(m.publishedAt)}</small></p>
                        </div>
                    </div>
                </div>
            </div>`;
        });
        $('.news-container').html(cards);
    },
    error: (e) => {
        console.log(e.responseText);
    },
});