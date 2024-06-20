const VIDEOS = [
    {
      title: "Standup Comedy: The Beginning",
      timestamp: "2 hours ago",
      author: "Ashish Solanki",
      views: "500k"
    },
    {
      title: "Comedy Night Live",
      timestamp: "1 day ago",
      author: "Naveen Richard",
      views: "1.2m"
    },
    {
      title: "Laugh Riot with Kenny Sebastian",
      timestamp: "5 days ago",
      author: "Kenny Sebastian",
      views: "3.8m"
    },
    {
      title: "Roast Battle: All Stars",
      timestamp: "2 weeks ago",
      author: "Zakir Khan",
      views: "2.1m"
    },
    {
      title: "The Great Indian Laughter Challenge",
      timestamp: "1 month ago",
      author: "Kanan Gill",
      views: "10m"
    },
    {
      title: "Improv Comedy Special",
      timestamp: "3 months ago",
      author: "Biswa Kalyan Rath",
      views: "4.5m"
    },
    {
      title: "Standup Marathon: 24 Hours",
      timestamp: "6 months ago",
      author: "Abhishek Upmanyu",
      views: "8m"
    },
    {
      title: "Comedy Legends: A Retrospective",
      timestamp: "1 year ago",
      author: "Aditi Mittal",
      views: "15m"
    },
    {
      title: "Midnight Laughs",
      timestamp: "4 hours ago",
      author: "Rahul Subramanian",
      views: "350k"
    },
    {
      title: "The Ultimate Roast Show",
      timestamp: "3 days ago",
      author: "Aakash Gupta",
      views: "2.7m"
    },
    {
      title: "Jokes from the Underground",
      timestamp: "2 weeks ago",
      author: "Anirban Dasgupta",
      views: "1.9m"
    },
    {
      title: "Comedy Fiesta",
      timestamp: "2 months ago",
      author: "Sumukhi Suresh",
      views: "5.3m"
    },
    {
      title: "Standup Revolution",
      timestamp: "6 months ago",
      author: "Kenny Sebastian",
      views: "7.4m"
    },
    {
      title: "Laugh Out Loud: The Show",
      timestamp: "9 months ago",
      author: "Karunesh Talwar",
      views: "6.6m"
    },
    {
      title: "Backstage Banter",
      timestamp: "1 year ago",
      author: "Kaneez Surka",
      views: "12m"
    },
    {
      title: "Prime Time Laughs",
      timestamp: "2 years ago",
      author: "Daniel Fernandes",
      views: "20m"
    }
  ];
  
  // Export the VideoGrid component
  export const VideoGrid = () => {
    return (
      <div className="grid grid-cols-4 gap-4">
        {VIDEOS.map((video, index) => (
          <div key={index} className="video-card p-4 border rounded shadow-sm">
            <h2 className="text-lg font-semibold">{video.title}</h2>
            <p className="text-gray-600">{video.timestamp}</p>
            <p className="text-gray-600">by {video.author}</p>
            <p className="text-gray-600">{video.views} views</p>
          </div>
        ))}
      </div>
    );
  }
  