<script>
  import { mutation } from "micro-graphql-svelte";
  import { navigate } from "svelte-routing";
  import { token } from "../../Stores/User";
  import Field from "../../Components/Field.svelte";
  import LOGIN_MUTATION from "../../graphql/mutations/login";
  let fields = {
    username: "",
    password: "",
  };

  let error: string;

  const { mutationState } = mutation(LOGIN_MUTATION);
  async function handleSubmit() {
    const { username, password } = fields;
    try {
      const { sessionCreate } = await $mutationState.runMutation({
        username,
        password,
      });

      if (sessionCreate.code) {
        error = sessionCreate.message;
      } else {
        error = "";
        token.set(sessionCreate.token);
        localStorage.setItem("authToken", sessionCreate.token);
        navigate("/home");
      }
    } catch {
      window.alert("Error!");
    }
  }
</script>

<div class="page">
  <div class="formContainer">
    <h1 class="form-title">ANIME LIBRARY</h1>
    <form on:submit|preventDefault={handleSubmit}>
      <Field
        leftIcon="fas fa-user"
        name="username"
        label="Username"
        bind:value={fields.username}
      />
      <Field
        leftIcon="fas fa-lock"
        name="password"
        label="Password"
        bind:value={fields.password}
      />
      {#if error}
        <span class="error-message">{error}</span>
      {/if}
      <button disabled={$mutationState.running} type="submit">Log In</button>
    </form>
  </div>
  <div class="background" />
</div>

<style lang="scss">
  .page {
    display: flex;
    min-height: 100vh;
    background: var(--bg-color);
    .formContainer {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100vh;
      max-width: 520px;

      h1 {
        text-align: center;
        color: var(--font-color);
        padding: 10px 0;
        border-bottom: 5px solid var(--font-color);
        border-top: 5px solid var(--font-color);
        margin-bottom: 5px;
      }

      form {
        width: 60%;
        button[type="submit"] {
          border: 0;
          width: 100%;
          padding: 10px;
          border-radius: 5px;
          background: var(--primary-color);
          color: var(--on-primary);
          font-size: 20px;
          font-weight: bold;
          margin-top: 10px;

          &:disabled {
            opacity: 0.5;
          }
        }

        span.error-message {
          color: var(--error-color);
        }
      }
    }

    .background {
      flex: 1;
      background-size: cover;
      background-position: center;
      background-image: url(https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=841&q=80);
    }
  }
</style>
