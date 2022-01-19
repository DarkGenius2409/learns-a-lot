<template>
  <div class="container">
    <SignIn>
      <h1 class="display-4 heading">Browse</h1>
      <hr />
      <v-list class="lessonList">
        <v-list-group v-for="category in categories" :key="category.id">
          <template v-slot:activator>
            <v-list-item-title class="listTitle">{{
              category.name
            }}</v-list-item-title>
          </template>

          <!-- Subcategory -->
          <v-list-group
            no-action
            sub-group
            v-for="subCategory in category.subCategories"
            :key="subCategory.id"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title class="listTitle">{{
                  subCategory.name
                }}</v-list-item-title>
              </v-list-item-content>
            </template>

            <!-- Lessons -->
            <v-list-item v-for="lesson in subCategory.lessons" :key="lesson.id">
              <router-link
                :to="{ name: 'lesson-view', params: { id: lesson.id } }"
                class="link"
              >
                <v-list-item-title class="listTitle">{{
                  lesson.data.title
                }}</v-list-item-title>
              </router-link>
            </v-list-item>
            <!-- Lessons End -->
          </v-list-group>
          <!-- Subcategory End -->
        </v-list-group>
      </v-list>
    </SignIn>
  </div>
</template>

<script>
import firebase from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import uniqid from "uniqid";
import SignIn from "../components/SignIn";

export default {
  name: "LessonSelect",
  components: { SignIn },
  data() {
    return {
      categories: [],
      signedIn: false,
    };
  },
  async mounted() {
    if (firebase.auth.currentUser) {
      this.signedIn = true;
    }
    let lessonsData = [];
    let subCatsData = [];
    let catsData = [];

    const lessonsRef = collection(firebase.db, "lessons");

    const querySnapshot = await getDocs(lessonsRef);
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const lesson = { id: doc.id, data: data };
      lessonsData.push(lesson);
      if (!subCatsData.includes(data.subCategory)) {
        subCatsData.push(data.subCategory);
      }
      if (!catsData.includes(data.category)) {
        catsData.push(data.category);
      }
    });

    this.categories = this.structureData(catsData, subCatsData, lessonsData);
  },
  methods: {
    structureData: function (catsParam, subCatsParam, lessonsParam) {
      let cats = catsParam;
      let subCats = subCatsParam;
      let lessons = lessonsParam;
      for (let i = 0; i < subCats.length; i++) {
        let subCatLessons = [];
        let subCatCat = "";
        for (let j = 0; j < lessons.length; j++) {
          if (lessons[j].data.subCategory == subCats[i]) {
            subCatLessons.push(lessons[j]);
            subCatCat = lessons[j].data.category;
          }
        }

        const subCatObj = {
          id: uniqid(),
          name: subCats[i],
          category: subCatCat,
          lessons: subCatLessons,
        };
        subCats[i] = subCatObj;
      }
      for (let i = 0; i < cats.length; i++) {
        let catSubCats = [];
        for (let j = 0; j < subCats.length; j++) {
          if (subCats[j].category == cats[i]) {
            catSubCats.push(subCats[j]);
          }
        }
        const catObj = {
          id: uniqid(),
          name: cats[i],
          subCategories: catSubCats,
        };
        cats[i] = catObj;
      }
      return cats;
    },
  },
};
</script>

<style lang="scss" scoped>
.listTitle {
  color: white;
}

.lessonList {
  margin-top: 1.5rem;
}
</style>
