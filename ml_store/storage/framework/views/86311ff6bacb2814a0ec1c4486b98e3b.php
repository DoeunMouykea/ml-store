<?php $__env->startSection('title', 'Blog Page'); ?>

<?php $__env->startSection('content'); ?>
<div class="card mb-4">
    <div class="card-header">
        <h2 class="mb-0 text-center ">Preview of Submitted Blog Data</h2>
    </div>
    <div class="card-body">
        <?php if(!empty($blogData)): ?>
            <?php $__currentLoopData = $blogData; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $data): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <div class="preview-section">
                    <h4>Title: <?php echo e(htmlspecialchars($data['title'])); ?></h4>
                    <p><strong>Content:</strong> <?php echo nl2br(e($data['content'])); ?></p>

                    <p><label for="image">Image:</label>
                    <img src="<?php echo e(asset('storage/' . $data['image'])); ?>" alt="Image" width="200"></p>

                    <div class="row justify-content-start mt-3">
                        <div class="col-sm-10">
                            <a href="<?php echo e(route('edit_blog', ['id' => $data['id']])); ?>" class="btn btn-warning">Edit</a>
                            <a href="<?php echo e(route('delete_blog', ['id' => $data['id']])); ?>" class="btn btn-danger" onclick="return confirm('Are you sure you want to delete this record?')">Delete</a>
                        </div>
                    </div>
                </div>
                <hr>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        <?php else: ?>
            <p>No blog data available to preview.</p>
        <?php endif; ?>
    </div>
</div>
<?php echo $__env->make('components.script', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\xampp\htdocs\ml-store-api\resources\views/showblog.blade.php ENDPATH**/ ?>