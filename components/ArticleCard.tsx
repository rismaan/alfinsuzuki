
import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={article.imageUrl} alt={article.title} />
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 h-14 overflow-hidden">{article.title}</h3>
        <p className="text-gray-600 mt-2 h-20 overflow-hidden">{article.excerpt}</p>
        <Link 
          to={`/article/${article.id}`}
          className="mt-4 inline-block text-suzukiRed font-semibold hover:text-red-700"
        >
          Baca Selengkapnya &rarr;
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
