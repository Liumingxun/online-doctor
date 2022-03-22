<script setup>
import THeader from '@c/Header.vue'
import IndexBanner from '@c/IndexBanner.vue'
import ContentSection from '@c/ContentSection.vue'</script>

<template>
  <el-container>
    <el-header>
      <t-header :needBtn="true"/>
    </el-header>
    <el-main class="p-0">
      <index-banner/>
      <div class="m-auto w-75%">
        <div class="flex">
          <div class="inline-block w-60% box-border px-2">
            <content-section moreLink="knowledgeList" title="疾病知识">
              <div class="flex flex-row justify-around justify-items-center h-208px">
                <div class="bg-blue-200 w-16% h-full"></div>
                <div class="bg-blue-200 w-16% h-50%"></div>
                <div class="bg-blue-200 w-16% h-50%"></div>
                <div class="bg-blue-200 w-16% h-50%"></div>
                <div class="bg-blue-200 w-16% h-50%"></div>
              </div>
            </content-section>
          </div>
          <div class="inline-block w-40% box-border px-2">
            <content-section moreLink="articleList" title="专家文章">
              <ul class="list-inside list-circle">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </content-section>
          </div>
        </div>
        <div class="box-border px-2">
          <content-section title="感谢信">
            <el-carousel arrow="never" indicator-position="none" interval="5000" type="card">
              <el-carousel-item>
                <el-card>
                  <template #header>
                    💝感谢XX医院的X大夫救我狗命
                  </template>
                  <div class="indent-2em">
                    超级多的感谢的文字，超级多的感谢的文字，超级多的感谢的文字，超级多的感谢的文字，超级多的感谢的文字，超级多的感谢的文字，超级多的感谢的文字，超级多的感谢的文字，超级多的感谢的文字，超级多的感谢的文字，超级多的感谢的文字，超级多的感谢的文字，超级多的感谢的文字，超级多的感谢的文字，超级多的感谢的文字，超级多的感谢的文字，超级多的感谢的文字，超级多的感谢的文字，超级多的感谢的文字，超级多的感谢的文字，超级多的感谢的文字，超级多的感谢的文字，
                  </div>
                </el-card>
              </el-carousel-item>
              <el-carousel-item></el-carousel-item>
              <el-carousel-item></el-carousel-item>
            </el-carousel>
          </content-section>
        </div>
      </div>
    </el-main>
  </el-container>
</template>
