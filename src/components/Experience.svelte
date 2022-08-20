<script>
    import Coderhouse from "../components/Coderhouse.svelte";
</script>

<section
    id="experience"
    class="relative flex flex-col gap-4 justify-center items-center min-h-screen"
>
    <h2 class="text-3xl">Experience</h2>
    <article
        class="bg-red-9net text-white p-8 rounded-lg shadow-xl shadow-red-300"
    >
        <h3 class="text-2xl mb-2">
            <a href="https://www.9net.com.ar" target="_blank">
                <img src="/9net.png" alt="9net" class="h-8" />
            </a>
        </h3>
        <span>
            <b>Fullstack Engineer</b>
        </span>
        <p>Desarrollo de aplicaciones web para empresas de todo el mundo.</p>
        <div class="flex justify-end mt-6">
            <button class="bg-white px-4 py-2 rounded text-red-9net"
                >Read more</button
            >
        </div>
    </article>

    <article class="bg-black text-white p-8 rounded-lg shadow-xl">
        <h3 class="text-2xl mb-2">
            <a href="https://www.coderhouse.com" target="_blank">
                <Coderhouse />
            </a>
        </h3>
        <span>
            <b>JS Mentor</b>
        </span>
        <p>Desarrollo de aplicaciones web para empresas de todo el mundo.</p>
        <div class="flex justify-end mt-6">
            <button class="bg-white px-4 py-2 rounded text-black"
                >Read more</button
            >
        </div>
    </article>

    <article
        class="bg-indigo-upya text-white p-8 rounded-lg shadow-xl shadow-purple-200"
    >
        <h3 class="text-2xl mb-2">
            <a href="https://www.coderhouse.com" target="_blank"> UPYA </a>
        </h3>
        <span>
            <b>Co-Founder, Frontend Engineer</b>
        </span>
        <p>Desarrollo de aplicaciones web para empresas de todo el mundo.</p>
        <div class="flex justify-end mt-6">
            <button class="bg-white px-4 py-2 rounded text-indigo-upya"
                >Read more</button
            >
        </div>
    </article>
</section>
