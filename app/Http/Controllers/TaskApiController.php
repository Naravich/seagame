<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Task;
use Log;
use Auth;

class TaskApiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index()
    {
        $id = Auth::guard('api')->user()->id;
        $tasks = Task::all()->where('user_id',$id);
        $test = 'test';
        return response()->json([
            'tasks' => $tasks,
        ]);
        // return view('react');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request){
        $this->validate($request, [
            'name' => 'required|max:255',
        ]);
        $task = $request->user()->tasks()->create([
            'name' => $request->name,
        ]);
        return response()->json([
            'tasks' => $task
        ]);
    }
    public function destroy(Request $request, Task $task)
    {
        $this->authorize('destroy', $task);
        $task->delete();
        
        return response()->json([
            'tasks' => $task
        ]);
    }
}
