<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-xl text-center">
        <h2 class="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Testimonials</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hear From Our Customers</p>
      </div>
      <div class="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
        <div class="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
          <div class="pt-8 sm:inline-block sm:w-full sm:px-4" v-for="itm in 6" :key="itm">
            <figure class="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
              <blockquote class="text-gray-900">
                <p>“All one has to do is to look at your investment to see how well it is being looked after.”</p>
              </blockquote>
              <figcaption class="mt-6 flex items-center gap-x-4">
                <img class="h-10 w-10 rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                <div>
                  <div class="font-semibold text-gray-900">Leslie Alexander</div>
                  <div class="text-gray-600">@lesliealexander</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {

}
</script>

<style>

</style>
