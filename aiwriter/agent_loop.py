import os
from context_builder import build_context
from writer import write_essay
from ranker import rank_essay
from env import DRAFTS_DIR

def all_scores_greater_than_threshold(scores, threshold=8):
    return all(float(v) > threshold for v in scores.__dict__.values() if isinstance(v, (int, float)))

def agent_loop(prompt: str, max_iters: int = 6):
    os.makedirs(DRAFTS_DIR, exist_ok=True)
    essay_text = None
    for i in range(1, max_iters + 1):
        if i == 1:
            context = build_context(prompt)
            essay = write_essay(context)
        else:
            essay = write_essay(str(essay_text))
        essay_text = essay
        draft_path = f"{DRAFTS_DIR}/draft_{i}.md"
        with open(draft_path, "w") as f:
            f.write(str(essay))

        # Score the essay
        # Use default criteria if not present
        criteria = ["clarity", "conciseness", "relevance", "engagement", "accuracy"]
        try:
            from env import CRITERIA_FILE
            if os.path.exists(CRITERIA_FILE):
                with open(CRITERIA_FILE) as cf:
                    criteria = [c.strip() for c in cf.read().split(",") if c.strip()]
        except Exception:
            pass
        scores = rank_essay(str(essay), criteria)
        score_path = f"{DRAFTS_DIR}/draft_score_{i}.md"
        with open(score_path, "w") as f:
            f.write(str(scores))
        if all_scores_greater_than_threshold(scores, threshold=8):
            print(f"All scores above 8 at iteration {i}. Exiting loop.")
            break

def cli():
    import sys
    if len(sys.argv) < 2:
        print("Usage: python agent_loop.py <prompt>")
        return
    prompt = sys.argv[1]
    agent_loop(prompt)

if __name__ == "__main__":
    cli()