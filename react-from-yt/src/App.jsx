import Card from './Components/Card'

// All styles in one object
const styles = {
  parent: {
    minHeight: '100vh',
    width: '100%',
    backgroundColor: '#111',
    padding: '40px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '30px',
    boxSizing: 'border-box'
  },
  card: {
    height: '330px',
    width: '100%',
    maxWidth: '350px',
    backgroundColor: '#fff',
    borderRadius: '30px',
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxSizing: 'border-box'
  },
  top: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: '30px'
  },
  topImg: {
    height: '42px',
    width: '42px',
    borderRadius: '50%',
    border: '1px solid #dadada',
    padding: '3px',
    objectFit: 'cover'
  },
  topButton: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #dadada',
    padding: '3px 6px',
    fontSize: '10px',
    borderRadius: '5px',
    gap: '3px',
    backgroundColor: 'transparent',
    color: '#8b8b8b',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  },
  center: {
    marginBottom: '15px'
  },
  centerH3: {
    fontSize: '16px',
    fontWeight: '500',
    marginBottom: '8px'
  },
  centerSpan: {
    fontSize: '9px',
    fontWeight: '400',
    color: '#aeaeae',
    marginLeft: '8px'
  },
  centerH2: {
    fontSize: '21px',
    fontWeight: '500',
    marginBottom: '10px'
  },
  tag: {
    display: 'flex',
    marginTop: '10px',
    gap: '5px'
  },
  tagH4: {
    fontSize: '10px',
    backgroundColor: '#e4e4e4',
    color: '#202020',
    fontWeight: '500',
    padding: '4px 8px',
    borderRadius: '3px'
  },
  bottom: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTop: '1.5px solid #d7d7d7ce',
    paddingTop: '15px'
  },
  bottomButton: {
    backgroundColor: 'rgb(18, 18, 18)',
    color: 'white',
    padding: '7px 16px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '12px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  },
  bottomH3: {
    fontSize: '17px',
    fontWeight: '500',
    marginBottom: '4px'
  },
  bottomP: {
    fontSize: '10px',
    color: '#8b8b8b'
  }
};

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
      companyName: "Meta",
      datePosted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hour",
      location: "Menlo Park, USA"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      companyName: "Apple",
      datePosted: "3 weeks ago",
      post: "iOS Developer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$90/hour",
      location: "Cupertino, USA"
    },
    {
      brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
      companyName: "Netflix",
      datePosted: "10 days ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$110/hour",
      location: "Los Gatos, USA"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png",
      companyName: "Google",
      datePosted: "1 week ago",
      post: "Cloud Solutions Architect",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$85/hour",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
      companyName: "Microsoft",
      datePosted: "4 weeks ago",
      post: "Data Scientist",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$75/hour",
      location: "Redmond, USA"
    },
    {
      brandLogo: "https://blog.logomaster.ai/hs-fs/hubfs/ibm-logo-1967.jpg?width=672&height=454&name=ibm-logo-1967.jpg",
      companyName: "IBM",
      datePosted: "2 days ago",
      post: "AI Research Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hour",
      location: "New York, USA"
    },
    {
      brandLogo: "https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png",
      companyName: "Tesla",
      datePosted: "6 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$80/hour",
      location: "Austin, USA"
    },
    {
      brandLogo: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
      companyName: "NVIDIA",
      datePosted: "3 weeks ago",
      post: "GPU Programmer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$120/hour",
      location: "Santa Clara, USA"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s",
      companyName: "Oracle",
      datePosted: "8 days ago",
      post: "Database Administrator",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Mumbai, India"
    }
  ];

  return (
    <div style={styles.parent}>
      {jobOpenings.map(function (elem, idx) {
        return (
          <Card
            key={idx}
            company={elem.companyName}
            datePosted={elem.datePosted}
            post={elem.post}
            tag1={elem.tag1}
            brandLogo={elem.brandLogo}
            pay={elem.pay}
            tag2={elem.tag2}
            location={elem.location}
            styles={styles}
          />
        )
      })}
    </div>
  )
}

export default App