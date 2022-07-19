import { useEffect, useState } from 'react'
import { TriangleDownIcon, TriangleRightIcon } from '@primer/octicons-react'
import axios from 'axios'

export default function Developer({ dev }) {
  const [expanded, setExpanded] = useState(false)
  const [repos, setRepos] = useState([])

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${dev.gitHub}/repos`)
      .then((res) => setRepos(res.data))
  }, [])

  return (
    <div className="dev-card">
      <h2>{dev.name}</h2>
      <p>Expertise: {dev.expertise}</p>

      {expanded ? (
        <>
          <div
            className="disclosure-control"
            role="button"
            aria-expanded={expanded}
            onClick={() => setExpanded(!expanded)}
          >
            <TriangleDownIcon size={24} aria-label="Show less" />
            <span>Show less</span>
          </div>
          <div className="repos">
            <ul>
              {repos.map((repo) => (
                <li>
                  <a href={repo.html_url}>{repo.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <div
          className="disclosure-control"
          role="button"
          aria-expanded={expanded}
          onClick={() => setExpanded(!expanded)}
        >
          <TriangleRightIcon size={24} aria-label="Show more" />
          <span>Show more</span>
        </div>
      )}
    </div>
  )
}
