package com.github.triniwiz.pager;
import org.json.JSONObject;
import org.json.JSONArray;
public class Utils {
    public static void updateCollection(String update, androidx.recyclerview.widget.RecyclerView.Adapter< androidx.recyclerview.widget.RecyclerView.ViewHolder> adapter){
        try{
            JSONObject json = new JSONObject(update);
            int index = json.getInt("index");
            int addedCount;
            int removedCount;
            switch(json.getString("action")){
                case "add":
                addedCount = json.getInt("addedCount");
                adapter.notifyItemRangeInserted(
                    index,
                    addedCount
                );
                break;
                case "delete":
                removedCount = json.getInt("removedCount");
                adapter.notifyItemRangeRemoved(
                    index,
                    removedCount
                );
                break;
                case "update":
                adapter.notifyItemChanged(index);
                break;
                case "splice":
                removedCount = json.getInt("removedCount");
                addedCount = json.getInt("addedCount");
                if (removedCount > 0) {
                    adapter.notifyItemRangeRemoved(
                      index,
                      removedCount
                    );
                  }
                  if (addedCount > 0) {
                    adapter.notifyItemRangeInserted(
                      index,
                      addedCount
                    );
                  }
                break;
                case "change":
                break;
                default:
                break;
            }
        }catch(Exception e){}
    }
}