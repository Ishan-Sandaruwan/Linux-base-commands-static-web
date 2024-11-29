document.addEventListener("DOMContentLoaded", () => {
  const posts = [
    {
      title: "Linux File System Navigation",
      content: `
                <h2 id="system">1. Linux File System Hierarchy</h2>
                <p>The Linux file system starts with the root directory /. Common directories:</p>
                <ul>
                    <li>/home: User home directories.</li>
                    <li>/bin: Essential binaries.</li>
                    <li>/etc: Configuration files.</li>
                    <li>/var: Variable files like logs.</li>
                    <li>/tmp: Temporary files.</li>
                    <li>/usr: User-installed programs.</li>
                </ul>
                <h2>2. Commands for Navigation</h2>
                <p><strong>pwd (Print Working Directory)</strong><br>Displays the current directory's absolute path.</p>
                <pre><code>$ pwd
/home/user</code></pre>
                <p><strong>ls (List Directory Contents)</strong><br>Lists files and directories in the current directory.</p>
                <pre><code>$ ls -l</code></pre>
                <p>Use Tab for auto-completion of file and directory names. Hidden files start with a . (e.g., .bashrc). Use ls -a to view them.</p>
            `,
    },
    {
      title: "Practice with Basic Bash Commands for File Management",
      content: `
                <h2 id="management">1. touch - Create Empty Files</h2>
                <p>Creates a new empty file or updates the timestamp of an existing file.</p>
                <p><strong>Example:</strong></p>
                <pre><code>$ touch file1.txt
$ ls file1.txt</code></pre>
                <p><strong>Practice:</strong></p>
                <p>Create files notes.txt and tasks.txt in the current directory.</p>
                <pre><code>$ touch notes.txt tasks.txt
$ ls</code></pre>
                <h2>2. mv - Move or Rename Files</h2>
                <p>Moves files from one location to another or renames them.</p>
                <p><strong>Example:</strong></p>
                <p>Rename a file:</p>
                <pre><code>$ mv file1.txt file2.txt</code></pre>
                <p>Move a file to a directory:</p>
                <pre><code>$ mv file2.txt /path/to/destination/</code></pre>
                <p><strong>Practice:</strong></p>
                <p>Create a directory named backup.</p>
                <pre><code>$ mkdir backup</code></pre>
                <p>Move notes.txt into the backup directory.</p>
                <pre><code>$ mv notes.txt backup/</code></pre>
                <p>Rename tasks.txt to todos.txt.</p>
                <pre><code>$ mv tasks.txt todos.txt</code></pre>
                <h2>3. rm - Remove Files and Directories</h2>
                <p>Deletes files or directories (use with caution).</p>
                <p><strong>Example:</strong></p>
                <p>Remove a file:</p>
                <pre><code>$ rm file2.txt</code></pre>
                <p>Remove a directory and its contents:</p>
                <pre><code>$ rm -r /path/to/directory/</code></pre>
                <p><strong>Practice:</strong></p>
                <p>Delete the file todos.txt.</p>
                <pre><code>$ rm todos.txt</code></pre>
                <p>Remove the entire backup directory.</p>
                <pre><code>$ rm -r backup</code></pre>
                <h2>4. cp - Copy Files and Directories</h2>
                <p>Copies files or directories to another location.</p>
                <p><strong>Example:</strong></p>
                <p>Copy a file:</p>
                <pre><code>$ cp file1.txt file1_backup.txt</code></pre>
                <p>Copy a directory and its contents:</p>
                <pre><code>$ cp -r /source/directory /destination/</code></pre>
                <p><strong>Practice:</strong></p>
                <p>Copy file1_backup.txt to a new file named file1_copy.txt.</p>
                <pre><code>$ cp file1_backup.txt file1_copy.txt</code></pre>
                <p>Create a new directory data and copy all files into it.</p>
                <pre><code>$ mkdir data
$ cp *.txt data/</code></pre>
                <h2>Additional Tips</h2>
                <p>Use ls after each step to verify changes.</p>
                <p>Be careful with rm as it permanently deletes files. Use rm -i for confirmation prompts.</p>
                <p>For recursive operations (directories), always add the -r flag (cp -r, rm -r).</p>
            `,
    },
    {
      title: "Managing Running Processes in Linux: ps, top, and kill",
      content: `
                <h2 id="process">1. ps - List Processes</h2>
                <p>Purpose: Displays information about running processes.</p>
                <pre><code>$ ps
PID TTY TIME CMD
1234 pts/0 00:00:00 bash
5678 pts/0 00:00:01 python</code></pre>
                <h2>2. top - Monitor Processes in Real-Time</h2>
                <p>Purpose: Provides a dynamic, real-time view of running processes.</p>
                <pre><code>$ top</code></pre>
                <h2>3. kill - Terminate Processes</h2>
                <p>Purpose: Stops a process using its PID.</p>
                <pre><code>$ kill [options] PID
$ kill 1234
$ kill -9 1234</code></pre>
                <h2>Advanced Tools</h2>
                <p><strong>htop:</strong> A user-friendly alternative to top.</p>
                <pre><code>$ sudo apt install htop # Debian/Ubuntu
$ sudo yum install htop # CentOS/Red Hat</code></pre>
                <p><strong>pkill:</strong> Kill processes by name.</p>
                <pre><code>$ pkill process_name</code></pre>
            `,
    },
  ];

  const postsContainer = document.getElementById("posts");

  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");

    const postTitle = document.createElement("h2");
    postTitle.innerHTML = post.title;

    const postContent = document.createElement("div");
    postContent.innerHTML = post.content;

    postElement.appendChild(postTitle);
    postElement.appendChild(postContent);

    postsContainer.appendChild(postElement);
  });
});
