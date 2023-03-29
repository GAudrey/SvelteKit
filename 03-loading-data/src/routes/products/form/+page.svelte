<script>
    import { enhance } from '$app/forms';
</script>

<form use:enhance method="POST" action="?/save">
    <input type="text" name="username" />
    <button>Enregistrer</button>
    <button formaction="?/delete">Supprimer</button>
</form>