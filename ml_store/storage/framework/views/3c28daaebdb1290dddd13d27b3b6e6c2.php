<?php $__env->startSection('title', 'About Page'); ?>

<?php $__env->startSection('content'); ?>
<div class="card">
    <h5 class="card-header text-center">Table Orders</h5>
    <div class="table-responsive text-nowrap">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Invoice</th>
                    <th>Name Customer</th>
                    <th>Phone number</th>
                    <th>Address</th>
                    <th>Payment Method</th>
                    <th>Order Date</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody class="table-border-bottom-0">
                <?php $__currentLoopData = $orders; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $order): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <tr>
                    <td><?php echo e($order['id']); ?></td>
                    <td><?php echo e($order['first_name'] ?? ''); ?> <?php echo e($order['last_name'] ?? ''); ?></td>
                    <td><?php echo e($order['phone'] ?? 'N/A'); ?></td>
                    <td><?php echo e($order['address'] ?? ''); ?>, <?php echo e($order['city'] ?? ''); ?>, <?php echo e($order['country'] ?? ''); ?></td>
                    <td><?php echo e($order['payment_method'] ?? 'N/A'); ?></td>
                    <td><?php echo e(\Carbon\Carbon::parse($order['created_at'])->format('M d, Y')); ?></td>
                    <td><?php echo e(number_format($order['total'], 2)); ?></td>
                    <td>
                        <span class="badge bg-label-primary me-1"><?php echo e($order['status'] ?? 'pending'); ?></span>
                    </td>
                    <td>
                        <div class="dropdown">
                            <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                <i class="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#"><i class="bx bx-edit-alt me-1"></i> Edit</a>
                                <a class="dropdown-item" href="#"><i class="bx bx-trash me-1"></i> Delete</a>
                            </div>
                        </div>
                    </td>
                </tr>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </tbody>
        </table>
    </div>
</div>
<?php echo $__env->make('components.script', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\xampp\htdocs\ml-store-api\resources\views/order.blade.php ENDPATH**/ ?>