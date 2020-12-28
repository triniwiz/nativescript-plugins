package com.github.triniwiz.imagedemo

import org.json.JSONArray
import org.json.JSONException

/**
 * Created by triniwiz on 10/17/19
 */
object Data {
  var items: JSONArray? = null

  init {
    try {
      items = JSONArray("""[
        {url: null },
        {url: 'https://via.placeholder.com/100'},
        {url: 'https://www.httpwatch.com/httpgallery/authentication/authenticatedimage/default.aspx?0.15533668997072891'},
        {url: 'res://law'},
        {url: 'https://api.adorable.io/avatars/285/1.png'},
        {url: null},
        {
        url:
        'https://api.adorable.io/avatars/285/2.png'
        },
        {url: 'https://api.adorable.io/avatars/285/3.png'},
        {url: 'https://api.adorable.io/avatars/285/4.png'},
        {url: 'https://images.unsplash.com/photo-1558981001-5864b3250a69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=8000&q=80'},
        {url: 'https://images.unsplash.com/photo-1458724338480-79bc7a8352e4'},
        {url: 'https://images.unsplash.com/photo-1456318019777-ccdc4d5b2396'},
        {url: 'https://images.unsplash.com/photo-1455098934982-64c622c5e066'},
        {url: 'https://images.unsplash.com/photo-1454817481404-7e84c1b73b4a'},
        {url: 'https://images.unsplash.com/photo-1454982523318-4b6396f39d3a'},
        {url: 'https://images.unsplash.com/photo-1456428199391-a3b1cb5e93ab'},
        {url: 'https://images.unsplash.com/photo-1423768164017-3f27c066407f'},
        {url: 'https://images.unsplash.com/photo-1433360405326-e50f909805b3'},
        {url: 'https://images.unsplash.com/photo-1421749810611-438cc492b581'},
        {url: 'https://images.unsplash.com/photo-1437652010333-fbf2cd02a4f8'},
        {url: 'https://images.unsplash.com/photo-1458640904116-093b74971de9'},
        {url: 'https://images.unsplash.com/photo-1422393462206-207b0fbd8d6b'},
        {url: 'https://images.unsplash.com/photo-1454047637795-79e3325dfa0e'},
        {url: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d'},
        {url: 'https://images.unsplash.com/photo-1440227537815-f4476b789291'},
        {url: 'https://images.unsplash.com/photo-1428189923803-e9801d464d76'},
        {
        url:
        'https://images.unsplash.com/reserve/eNu5TtyHRnWf9627TvZN_IMG_7791.JPG'
        },
        {url: 'https://images.unsplash.com/photo-1453227588063-bb302b62f50b'},
        {url: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31'},
        {url: 'https://images.unsplash.com/photo-1441986380878-c4248f5b8b5b'},
        {url: 'https://images.unsplash.com/photo-1439736637365-748f240b24fb'},
        {url: 'https://images.unsplash.com/photo-1440557653082-e8e186733eeb'},
        {url: 'https://images.unsplash.com/photo-1443926886562-c91054221a5c'},
        {url: 'https://images.unsplash.com/photo-1447958374760-1ce70cf11ee3'},
        {url: 'https://images.unsplash.com/photo-1449452198679-05c7fd30f416'},
        {url: 'https://images.unsplash.com/photo-1452723312111-3a7d0db0e024'},
        {
        url:
        'https://images.unsplash.com/uploads/14128434147336bfb286b/e76494ac'
        },
        {url: 'https://images.unsplash.com/photo-1421987392252-38a07781c07e'},
        {url: 'https://images.unsplash.com/photo-1422157245273-e08b638b4b00'},
        {url: 'https://images.unsplash.com/photo-1453106037972-08fbfe790762'},
        {url: 'https://images.unsplash.com/photo-1452110040644-6751c0c95836'},
        {url: 'https://images.unsplash.com/photo-1449960238630-7e720e630019'},
        {url: 'https://images.unsplash.com/photo-1433190152045-5a94184895da'},
        {url: 'https://images.unsplash.com/photo-1437382944886-45a9f73d4158'},
        {url: 'https://images.unsplash.com/photo-1433878455169-4698e60005b1'},
        {url: 'https://images.unsplash.com/photo-1453282716202-de94e528067c'},
        {url: 'https://images.unsplash.com/photo-1437382944886-45a9f73d4158'},
        {url: 'https://images.unsplash.com/photo-1453282716202-de94e528067c'},
        {url: 'https://images.unsplash.com/photo-1451188502541-13943edb6acb'},
        {url: 'https://images.unsplash.com/photo-1449024540548-94f5d5a59230'},
        {url: 'https://images.unsplash.com/photo-1447877085163-3cce903855cd'},
        {url: 'https://images.unsplash.com/photo-1445346366695-5bf62de05412'},
        {url: 'https://images.unsplash.com/photo-1442473483905-95eb436675f1'},
        {url: 'https://images.unsplash.com/photo-1434871619871-1f315a50efba'},
        {url: 'https://images.unsplash.com/photo-1433162653888-a571db5ccccf'},
        {url: 'https://images.unsplash.com/photo-1453743327117-664e2bf4e951'},
        {url: 'https://images.unsplash.com/photo-1453170804045-277782641dca'},
        {url: 'https://images.unsplash.com/photo-1452800185063-6db5e12b8e2e'},
        {url: 'https://images.unsplash.com/photo-1452274381522-521513015433'},
        {url: 'https://images.unsplash.com/photo-1451417379553-15d8e8f49cde'},
        {url: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3'},
        {url: 'https://images.unsplash.com/photo-1449057528837-7ca097b3520c'},
        {url: 'https://images.unsplash.com/photo-1447834353189-91c48abf20e1'},
        {url: 'https://images.unsplash.com/photo-1443890484047-5eaa67d1d630'},
        {url: 'https://images.unsplash.com/photo-1451303688941-9e06d4b1277a'},
        {url: 'https://images.unsplash.com/photo-1451186859696-371d9477be93'},
        {url: 'https://images.unsplash.com/photo-1447069387593-a5de0862481e'},
        {url: 'https://images.unsplash.com/photo-1445299370299-fba06c02df22'},
        {url: 'https://images.unsplash.com/photo-1444044205806-38f3ed106c10'},
        {url: 'https://images.unsplash.com/photo-1442589031151-61d5645469d7'},
        {url: 'https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0'},
        {url: 'https://images.unsplash.com/photo-1439723680580-bfd9d28ef9b6'},
        {url: 'https://images.unsplash.com/photo-1434472007488-8d47f604f644'},
        ]""")
    } catch (e: JSONException) {
      e.printStackTrace()
    }
  }
}
