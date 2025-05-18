# Agentic AI Writer

### Data Model
- Input
  - URLs
  - Prompt *(i.e. topic)*
  - Criteria
- Output
  - Content *(i.e. scored drafts)*

### Data Flow
```mermaid
flowchart TD
    A([URLs]) --> B(Content Builder)
    AA([Topic]) --> B(Content Builder)
    B --> C([Prompt])
    C --> D(Writer)
    D --> E([Draft])
    E --> F(Ranker)
    F --> FF([Scored Draft])
    H([Criteria]) --> F
    FF --> G{Agent Loop}
    I([Past Runs]) --> G
    G --> B

    style B fill:#fd0795,color:black,font-weight:bold
    style D fill:#00b5d7,color:black,font-weight:bold
    style F fill:#ff9000,color:black,font-weight:bold
    style G fill:#ffb901,color:black,font-weight:bold
```

### Modules
- **Content Builder**
  - prompt builder
  - url parser
    - html-to-markdown
    - audio-to-text (podcasts) <- out-of-scope
    - youtube-to-text <- out-of-scope
- **Writer**
- **Ranker**
- **Agent Loop**

## AI Writer tasks #todo
- html-to-markdown url parser
- prompt builder
- writer
- ranker
- agent loop
