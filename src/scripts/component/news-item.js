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
    return new Date(date).toLocaleDateString('id-ID', options);
};

$.ajax({
    url: 'https://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=d69d5961aed54976910dc7af584248ec',
    success: (results) => {
        const news = results.articles;
        let cards = '';
        news.forEach((m) => {
            cards += `
            <div class="card mb-3 ms-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${m.urlToImage}" class="img-fluid rounded-start mt-4" alt="..."width="100%">
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