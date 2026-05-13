import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get('path') || '/';
  
  try {
    // 默认清除整个站点的缓存 (layout 级别)
    revalidatePath(path, 'layout');
    return NextResponse.json({ 
      revalidated: true, 
      message: `Successfully cleared cache for path: ${path}`,
      now: Date.now() 
    });
  } catch (err) {
    return NextResponse.json({ 
      revalidated: false, 
      message: 'Error revalidating',
      error: err 
    }, { status: 500 });
  }
}
