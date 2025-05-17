<?php $__env->startSection('title', 'About Page'); ?>

<?php $__env->startSection('content'); ?>
<div class="card mb-4">
    <div class="card-header">
        <h2 class="mb-0 text-center">Preview of Submitted Data</h2>
    </div>
    <div class="card-body">
        <?php if(!empty($aboutData)): ?>
            <?php $__currentLoopData = $aboutData; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $data): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <div class="preview-section">
                    <h3>Title: <?php echo e(htmlspecialchars($data->title)); ?></h3>
                    <p style="font-sixe: 16"><strong>Content:</strong> <?php echo nl2br(e($data->content)); ?></p>

                    <p><strong for="image">Image:</strong>
                    <img class="m-3 " src="<?php echo e(asset('storage/'.$data->image)); ?>" alt="Image" width="200"></p>

                    <!-- Edit and Delete buttons -->
                    <div class="row justify-content-start">
                        <div class="col-sm-10 mt-5">
                            <a href="<?php echo e(route('edit_about', ['id' => $data->id])); ?>" class="btn btn-warning">Edit</a>
                            <a href="<?php echo e(route('delete_about', ['id' => $data->id])); ?>" class="btn btn-danger" onclick="return confirm('Are you sure you want to delete this record?')">Delete</a>
                        </div>
                    </div>
                </div>
                <hr>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        <?php else: ?>
            <p>No data available to preview.</p>
        <?php endif; ?>
    </div>
</div>

<?php echo $__env->make('components.script', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\xampp\htdocs\ml-store-api\resources\views/showabout.blade.php ENDPATH**/ ?>