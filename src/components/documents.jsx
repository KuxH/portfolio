import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaFilePdf, FaLock, FaEye, FaTimes } from "react-icons/fa"
import "./Hero.css"

export default function Documents() {
  const [selectedDoc, setSelectedDoc] = useState(null)
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const [unlocked, setUnlocked] = useState([])

  const ACCESS_KEY = "kushal2025"

  const documents = [
    {
      title: "Bachelor Transcript",
      type: "Academic Report",
      file: "/docs/bachelor-transcript.pdf",
    },
    {
      title: "+2 Marksheet",
      type: "Academic Report",
      file: "/docs/plus2-marksheet.pdf",
    },
    {
      title: "Bachelor Certificate",
      type: "Academic Certificate",
      file: "/docs/bachelor-certificate.pdf",
    },
    {
      title: "Engineering License",
      type: "Professional Credential",
      file: "https://nec.gov.np/registration/98513",
    },
  ]

  const openDoc = (doc) => {
    setSelectedDoc(doc)
    setPassword("")
    setError(false)
  }

  const closeModal = () => {
    setSelectedDoc(null)
    setPassword("")
    setError(false)
  }

  const unlockDocument = () => {
    if (password === ACCESS_KEY) {
      setUnlocked((prev) => [...prev, selectedDoc.title])
      setError(false)
    } else {
      setError(true)
    }
  }

  const isUnlocked = (title) => unlocked.includes(title)

  return (
    <section className="docs-vault">

      {/* SOFT BACKGROUND */}
      <div className="vault-glow-left" />
      <div className="vault-glow-right" />

      <div className="vault-container">

        {/* TITLE */}
        <h2 className="vault-title">
          📄 Documents Vault
        </h2>

        {/* GRID */}
        <div className="vault-grid">

          {documents.map((doc, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => openDoc(doc)}
              className="vault-card"
            >

              <div className="vault-card-top">

                <div className="vault-file-info">
                  <FaFilePdf className="vault-icon" />

                  <div>
                    <h3>{doc.title}</h3>
                    <p>{doc.type}</p>
                  </div>
                </div>

                {isUnlocked(doc.title) ? (
                  <span className="badge unlocked">Unlocked</span>
                ) : (
                  <span className="badge locked">Locked</span>
                )}

              </div>

              <div className="vault-footer">
                <FaEye />
                Click to preview
              </div>

            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedDoc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="vault-modal"
          >

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="vault-modal-box"
            >

              {/* HEADER */}
              <div className="vault-modal-header">
                <h3>{selectedDoc.title}</h3>

                <button onClick={closeModal}>
                  <FaTimes />
                </button>
              </div>

              {/* BODY */}
              <div className="vault-modal-body">

                {/* LOCK OVERLAY */}
                {!isUnlocked(selectedDoc.title) && (
                  <div className="vault-lock-screen">

                    <FaLock className="lock-icon" />

                    <p>This document is protected</p>

                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter access key"
                    />

                    {error && (
                      <p className="error">Incorrect access key</p>
                    )}

                    <button onClick={unlockDocument}>
                      Unlock Document
                    </button>

                  </div>
                )}

                {/* PREVIEW */}
                <iframe
                  src={selectedDoc.file}
                  className={`vault-preview ${
                    !isUnlocked(selectedDoc.title) 
                  }`}
                />

              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}