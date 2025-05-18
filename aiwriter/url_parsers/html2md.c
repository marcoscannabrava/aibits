/*
 * html2md - Convert HTML to Markdown using Pandoc
 *
 * Usage:
 *   html2md <input.html>
 *     Converts the specified HTML file to Markdown and writes the result to stdout.
 *
 *   html2md -
 *     Reads HTML input from stdin, converts it to Markdown, and writes the result to stdout.
 *
 * This program is a thin wrapper around Pandoc, invoking:
 *   pandoc -s -f html -t markdown --wrap=none <input>
 *
 * Requirements:
 *   - Pandoc must be installed and available in the system PATH.
 *
 * Example:
 *   html2md example.html > output.md
 *   cat example.html | html2md - > output.md
 *   pbpaste | html2md - > output.md
 */

#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]) {
    if (argc < 2) {
        fprintf(stderr, "Usage: %s <input.html>\n", argv[0]);
        return 1;
    }

    char cmd[512];
    if (argv[1][0] == '-' && argv[1][1] == '\0') {
        snprintf(cmd, sizeof(cmd), "pandoc -s -f html -t markdown --wrap=none -");
        FILE *fp = popen(cmd, "w");
        if (!fp) {
            perror("popen");
            return 1;
        }
        char buf[4096];
        size_t n;
        while ((n = fread(buf, 1, sizeof(buf), stdin)) > 0) {
            fwrite(buf, 1, n, fp);
        }
        pclose(fp);
        return 0;
    } else {
        snprintf(cmd, sizeof(cmd), "pandoc -s -f html -t markdown --wrap=none %s", argv[1]);
        FILE *fp = popen(cmd, "r");
        if (!fp) {
            perror("popen");
            return 1;
        }
        char outbuf[4096];
        size_t n;
        while ((n = fread(outbuf, 1, sizeof(outbuf), fp)) > 0) {
            fwrite(outbuf, 1, n, stdout);
        }
        pclose(fp);
        return 0;
    }
}
