import subprocess

def html_to_md(html_str):
    proc = subprocess.Popen([
        './build/html2md', '-'
    ], stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    out, err = proc.communicate(input=html_str.encode('utf-8'))
    if proc.returncode != 0:
        raise RuntimeError(f"Error: {err.decode('utf-8')}")
    return out.decode('utf-8')

if __name__ == "__main__":
    example_html = """
    <h1>Hello World</h1>
    <h2>Subheading</h2>
    <h3>Sub-subheading</h3>
    <p>This is <b>bold</b> and <i>italic</i>.</p>
    """
    md = html_to_md(example_html)
    print(md)
