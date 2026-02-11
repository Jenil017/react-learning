import { Bookmark } from 'lucide-react'

const Card = (props) => {
  const { styles } = props;

  return (
    <div style={styles.card}>
      <div>
        <div style={styles.top}>
          <img src={props.brandLogo} alt={props.company} style={styles.topImg} />
          <button
            style={styles.topButton}
            onMouseOver={(e) => e.target.style.backgroundColor = '#f5f5f5'}
            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Save <Bookmark size={10} />
          </button>
        </div>
        <div style={styles.center}>
          <h3 style={styles.centerH3}>
            {props.company}
            <span style={styles.centerSpan}>{props.datePosted}</span>
          </h3>
          <h2 style={styles.centerH2}>{props.post}</h2>
          <div style={styles.tag}>
            <h4 style={styles.tagH4}>{props.tag1}</h4>
            <h4 style={styles.tagH4}>{props.tag2}</h4>
          </div>
        </div>
      </div>
      <div style={styles.bottom}>
        <div>
          <h3 style={styles.bottomH3}>{props.pay}</h3>
          <p style={styles.bottomP}>{props.location}</p>
        </div>
        <button
          style={styles.bottomButton}
          onMouseOver={(e) => e.target.style.backgroundColor = 'rgb(40, 40, 40)'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'rgb(18, 18, 18)'}
        >
          Apply Now
        </button>
      </div>
    </div>
  )
}

export default Card

