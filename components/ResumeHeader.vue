<template>
  <header class="flex flex-col">
    <div class="flex items-stretch sm:items-start flex-col-reverse sm:flex-row">
      <h1 class="flex-grow flex-shrink-0 text-center sm:text-left">
        <SplitName
          :letters="resumeData.basics.nameSplit || resumeData.basics.name"
        />
      </h1>
      <PdfLink />
    </div>
    <section class="self-center -mr-16 sm:self-stretch sm:mr-0">
      <ContactInfo />
    </section>
  </header>
</template>
