
export class NewsArticle {
  constructor({
    id,
    title,
    summary,
    content,
    author,
    publishedAt,
    imageUrl,
    source,
    category,
    relatedStocks = []
  }) {
    this.id = id;
    this.title = title;
    this.summary = summary;
    this.content = content;
    this.author = author;
    this.publishedAt = new Date(publishedAt);
    this.imageUrl = imageUrl;
    this.source = source;
    this.category = category;
    this.relatedStocks = relatedStocks;
  }

  get timeAgo() {
    const now = new Date();
    const diffInMinutes = Math.floor((now - this.publishedAt) / (1000 * 60));
    
    if (diffInMinutes < 60) {
      return `${diffInMinutes} minutes ago`;
    } else if (diffInMinutes < 1440) {
      const hours = Math.floor(diffInMinutes / 60);
      return `${hours} hours ago`;
    } else {
      const days = Math.floor(diffInMinutes / 1440);
      return `${days} days ago`;
    }
  }

  get formattedDate() {
    return this.publishedAt.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }
}

export default NewsArticle;

