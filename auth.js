(function () {
  const USERS_KEY = "diddymark_users_v1";
  const SESSION_KEY = "diddymark_session_v1";
  const LAST_STUDENT_KEY = "hsc_science_last_student";

  function readJson(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return fallback;
      const parsed = JSON.parse(raw);
      return parsed && typeof parsed === "object" ? parsed : fallback;
    } catch {
      return fallback;
    }
  }

  function writeJson(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  }

  function normalizeEmail(value) {
    return String(value || "").trim().toLowerCase();
  }

  function getUsers() {
    return readJson(USERS_KEY, { users: {} });
  }

  function saveUsers(store) {
    return writeJson(USERS_KEY, store);
  }

  function getSession() {
    return readJson(SESSION_KEY, null);
  }

  function setSession(user) {
    const session = {
      email: user.email,
      name: user.name,
      school: user.school,
      phone: user.phone,
      loggedInAt: new Date().toISOString()
    };

    writeJson(SESSION_KEY, session);
    try {
      localStorage.setItem(LAST_STUDENT_KEY, user.name || "");
    } catch {
      // ignore local storage failures
    }
  }

  function clearSession() {
    try {
      localStorage.removeItem(SESSION_KEY);
    } catch {
      // ignore
    }
  }

  function redirect(url) {
    window.location.href = url;
  }

function requireSession() {
  const page = document.body.dataset.page;
  const protectedPages = new Set(["home", "single", "test", "history"]);
  if (!protectedPages.has(page)) return;

    const session = getSession();
    if (!session || !session.email) {
      redirect("login.html");
    }
  }

  function wireLogout(session) {
    const btn = document.getElementById("logoutBtn") || document.getElementById("logoutHomeBtn");
    if (!btn) return;

    btn.addEventListener("click", () => {
      clearSession();
      redirect("login.html");
    });

    const sessionDisplay = document.getElementById("sessionDisplay");
    if (sessionDisplay) {
      if (session && session.name) {
        const school = session.school ? ` | ${session.school}` : "";
        sessionDisplay.textContent = `Logged in as ${session.name}${school}`;
      } else {
        sessionDisplay.textContent = "Not logged in.";
      }
    }
  }

  function wireSignup() {
    const form = document.getElementById("signupForm");
    if (!form) return;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.getElementById("signupName").value.trim();
      const school = document.getElementById("signupSchool").value.trim();
      const email = normalizeEmail(document.getElementById("signupEmail").value);
      const phone = document.getElementById("signupPhone").value.trim();
      const password = document.getElementById("signupPassword").value;
      const confirm = document.getElementById("signupPasswordConfirm").value;
      const status = document.getElementById("signupStatus");

      if (!name || !school || !email || !phone || !password) {
        status.textContent = "Please complete every field.";
        return;
      }

      if (password.length < 6) {
        status.textContent = "Password must be at least 6 characters.";
        return;
      }

      if (password !== confirm) {
        status.textContent = "Passwords do not match.";
        return;
      }

      const store = getUsers();
      if (store.users[email]) {
        status.textContent = "This email is already registered. Please login.";
        return;
      }

      store.users[email] = {
        name,
        school,
        email,
        phone,
        password,
        createdAt: new Date().toISOString()
      };

      const ok = saveUsers(store);
      if (!ok) {
        status.textContent = "Could not save account in this browser. Try again.";
        return;
      }

      status.textContent = "Account created. Redirecting to login...";
      window.setTimeout(() => {
        redirect(`login.html?email=${encodeURIComponent(email)}`);
      }, 600);
    });
  }

  function wireLogin() {
    const form = document.getElementById("loginForm");
    if (!form) return;

    const url = new URL(window.location.href);
    const prefillEmail = normalizeEmail(url.searchParams.get("email"));
    const emailInput = document.getElementById("loginEmail");
    if (emailInput && prefillEmail) {
      emailInput.value = prefillEmail;
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const email = normalizeEmail(document.getElementById("loginEmail").value);
      const password = document.getElementById("loginPassword").value;
      const status = document.getElementById("loginStatus");

      const store = getUsers();
      const user = store.users[email];

      if (!user || user.password !== password) {
        status.textContent = "Invalid email or password.";
        return;
      }

      setSession(user);
      status.textContent = "Login successful. Opening dashboard...";
      window.setTimeout(() => {
        redirect("index.html");
      }, 300);
    });
  }

  function wireHome(session) {
    const page = document.body.dataset.page;
    if (page !== "home") return;

    const sessionDisplay = document.getElementById("sessionDisplay");
    if (sessionDisplay && session && session.name) {
      const school = session.school ? ` | ${session.school}` : "";
      sessionDisplay.textContent = `Welcome ${session.name}${school}`;
    }
  }

  function prefillStudentNameFromSession(session) {
    if (!session || !session.name) return;
    const input = document.getElementById("studentNameInput");
    if (!input) return;

    if (!input.value.trim()) {
      input.value = session.name;
      input.dispatchEvent(new Event("change", { bubbles: true }));
    }
  }

  requireSession();
  const session = getSession();

  wireSignup();
  wireLogin();
  wireLogout(session);
  wireHome(session);
  prefillStudentNameFromSession(session);

  window.DiddyAuth = {
    getSession,
    clearSession
  };
})();
