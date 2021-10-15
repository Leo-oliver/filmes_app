import React from "react";
import './MovieRow.css';

export default ({title, items}) => {

    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow_listarea">
                <div className="movieRow_list">
                        {items.results.length > 0 && items.results.map((item, key)=>(
                            <div key={key} className="movieRow_item">
                                <img src={`http://image.tmdb.org/t/p/w185/${item.poster_path}`} alt={item.original_title} />
                                <div className="dadoFilme">
                                    <h1>{`Título do filme: ${item.original_title}`}</h1>
                                    <p>{`Sinopse: ${item.overview}`}</p>
                                    <p>{`Data de lançamento: ${item.release_date}`}</p>
                                </div>    
                            </div>                           
                        ))} 
               </div>
            </div>
        </div>
    );
}