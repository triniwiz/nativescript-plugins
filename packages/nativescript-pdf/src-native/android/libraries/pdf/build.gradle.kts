plugins {
  alias(libs.plugins.android.library)
  alias(libs.plugins.kotlin.android)
  id("org.mozilla.rust-android-gradle.rust-android")
}

android {
  namespace = "io.github.triniwiz.plugins.pdf"
  compileSdk = 35
  ndkVersion = "28.1.13356709"

  defaultConfig {
    minSdk = 21

    testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
    consumerProguardFiles("consumer-rules.pro")
  }

  buildTypes {
    release {
      isMinifyEnabled = false
      proguardFiles(
        getDefaultProguardFile("proguard-android-optimize.txt"),
        "proguard-rules.pro"
      )
    }
  }
  compileOptions {
    sourceCompatibility = JavaVersion.VERSION_17
    targetCompatibility = JavaVersion.VERSION_17
  }
  kotlinOptions {
    jvmTarget = "17"
  }
}

cargo {
  module = "../../../pdf-native"
  libname = "pdfnative"

//  targets = listOf("arm64")
  targets = listOf("arm", "arm64", "x86", "x86_64")
  apiLevels = mapOf(
    "arm" to 21,
    "arm64" to 21,
    "x86" to 21,
    "x86_64" to 21
  )
  profile = "release"
  verbose = false

  exec = { spec, toolchain ->
    spec.environment("RUSTFLAGS", "-C link-arg=-Wl,--hash-style=sysv -C link-arg=-Wl,-z,max-page-size=16384")
  }
  extraCargoBuildArguments = listOf("-p", "android")
}

dependencies {

  implementation(libs.androidx.core.ktx)
  implementation(libs.androidx.appcompat)
  implementation(libs.material)
  testImplementation(libs.junit)
  androidTestImplementation(libs.androidx.junit)
  androidTestImplementation(libs.androidx.espresso.core)
  implementation(libs.fastscroll)
}


project.afterEvaluate {
  tasks.withType(com.nishtahir.CargoBuildTask::class).forEach { buildTask ->
    tasks.withType(com.android.build.gradle.tasks.MergeSourceSetFolders::class).configureEach {
      this.inputs.dir(
        layout.buildDirectory.dir("rustJniLibs" + File.separatorChar + buildTask.toolchain!!.folder)
      )
      this.dependsOn(buildTask)
    }
  }
}
